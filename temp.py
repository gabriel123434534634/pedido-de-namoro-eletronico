import requests
import json

payload = {"content":"olá"}
header = {"authorization":"Bot ODExNzM3MDE3NzA3NjU5Mjg1.YC2jAg.5c0VKJpukT02Z_vVVF2NI_guLLU","content-type":"application/json"}
requests.post('https://discordapp.com/api/channels/957697542580211765/messages', headers=header,data=json.dumps(payload))