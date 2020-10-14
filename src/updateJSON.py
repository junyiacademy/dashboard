from azure.storage.blob import BlobServiceClient, ContentSettings
import pandas as pd
from google.cloud import bigquery
client = bigquery.Client()

WAU_week_by_week = client.query('CALL `IntegratedTable.WAU_week_by_week`();').to_dataframe()
WAU_week_by_week.to_json('./JSON/WAU_week_by_week.json', orient='records')

last_week_WAU_by_city = client.query('CALL `IntegratedTable.last_week_WAU_by_city`();').to_dataframe()
last_week_WAU_by_city.to_json('./JSON/last_week_WAU_by_city.json', orient='records')

reg_user_category = client.query('CALL IntegratedTable.reg_user_category();').to_dataframe()
reg_user_category.user_role = ['學生', '其他', '老師', '家長']
reg_user_category.to_json('./JSON/reg_user_category.json', orient='records')

content_type = client.query('CALL `IntegratedTable.content_type`();').to_dataframe()
content_type.to_json('./JSON/content_type.json', orient='records')

last_week_WAU_by_hour = client.query('CALL `IntegratedTable.last_week_WAU_by_hour`();').to_dataframe()
last_week_WAU_by_hour.to_json('./JSON/last_week_WAU_by_hour.json', orient='records')

content_usage_by_month = client.query('CALL IntegratedTable.content_usage_by_month();').to_dataframe()
video_cnt = content_usage_by_month[content_usage_by_month.content_kind == "Video"]
video_cnt.rename(columns={'cnt': 'video_cnt'}, inplace=True)
video_cnt.drop(columns='content_kind', inplace=True)
exercise_cnt = content_usage_by_month[content_usage_by_month.content_kind == "Exercise"]
exercise_cnt.rename(columns={'cnt': 'exercise_cnt'}, inplace=True)
exercise_cnt.drop(columns='content_kind', inplace=True)
df = video_cnt.merge(exercise_cnt, on="year_month")
df.to_json('./JSON/content_usage_by_month.json', orient='records')

reg_user_by_month = client.query('CALL `IntegratedTable.reg_user_by_month`();').to_dataframe()
reg_user_by_month.to_json('./JSON/reg_user_by_month.json', orient='records')

reg_user_by_city = client.query('CALL `IntegratedTable.reg_user_by_city`();').to_dataframe()
student = reg_user_by_city[reg_user_by_city.user_role == 'student']
student.rename(columns={'cnt': 'student'}, inplace=True)
student.drop(columns='user_role', inplace=True)
teacher = reg_user_by_city[reg_user_by_city.user_role == 'teacher']
teacher.rename(columns={'cnt': 'teacher'}, inplace=True)
teacher.drop(columns='user_role', inplace=True)
parent = reg_user_by_city[reg_user_by_city.user_role == 'parent']
parent.rename(columns={'cnt': 'parent'}, inplace=True)
parent.drop(columns='user_role', inplace=True)
other = reg_user_by_city[reg_user_by_city.user_role == 'others']
other.rename(columns={'cnt': 'other'}, inplace=True)
other.drop(columns='user_role', inplace=True)
null = reg_user_by_city[reg_user_by_city.user_role.isnull()]
null.rename(columns={'cnt': 'null'}, inplace=True)
null.drop(columns='user_role', inplace=True)
dfs = [df.set_index(['user_city']) for df in [student, teacher, parent, other, null]]
df_all = pd.concat(dfs, axis=1).reset_index()
df_all.fillna(0, inplace=True)
df_all['others'] = df_all['other'] + df_all['null']
df_all.drop(columns=['null', 'other'], inplace=True)
df_all.to_json('./JSON/reg_user_by_city.json', orient='records')

connection_string = ''

blob_service_client = BlobServiceClient.from_connection_string(connection_string)
container_client = blob_service_client.get_container_client('dashboard-json')
content_settings_json = ContentSettings(content_type='application/json')

files = ['content_type.json', 'content_usage_by_month.json', 'last_week_WAU_by_city.json',
'last_week_WAU_by_hour.json', 'reg_user_by_city.json', 'reg_user_by_month.json',
'reg_user_category.json', 'user_count_by_week.json', 'WAU_week_by_week.json']

for file in files:
    with open(f'./JSON/{file}', 'rb') as data:
        blob_client = container_client.upload_blob(data=data, name=file, overwrite=True, content_settings=content_settings_json)
        properties = blob_client.get_blob_properties()
        print(properties)