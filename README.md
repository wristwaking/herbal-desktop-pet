# herbal-desktop-pet
这是一款基于electron框架实现的药草知识科普桌面宠物应用程序。

# 药草宝宝迷你桌面宠物

![image](https://github.com/user-attachments/assets/76492858-ff9a-4524-aff9-d1832dd14648)

消息提示预览

![image](https://github.com/user-attachments/assets/5de3336d-37c7-45d8-9866-877151d5b775)

# 定时消息配置 `config.json`
```json
[
  {
    "time": "08:00",
    "content": "唤醒手腕！要吃药了 ❤"
  },
  {
    "time": "12:00",
    "content": "唤醒手腕！要吃药了 ❤"
  },
  {
    "time": "18:00",
    "content": "唤醒手腕！要吃药了 ❤"
  }
]
```

# 安装包截图

![image](https://github.com/user-attachments/assets/bc7b2b31-0778-43f2-89ca-af8c27ab5807)

![image](https://github.com/user-attachments/assets/d2475557-a8c1-4092-a436-1ea70a7c0621)

![image](https://github.com/user-attachments/assets/687aa30e-85d1-42eb-ac61-ce4ba9e6431a)


# 药草知识科普配置 message.txt
```
薄荷：具有清凉、提神作用，常用于缓解头痛、消化不良和咳嗽等症状。
洋甘菊：有安神、抗炎作用，常用于缓解焦虑、促进睡眠和缓解胃肠不适。
薰衣草：具镇静、抗焦虑效果，常用于缓解失眠、压力和头痛。
罗勒：抗菌消炎、助消化，常用于改善胃肠不适、缓解肌肉疼痛。
迷迭香：增强记忆力、抗氧化，有助于缓解头痛、消化不良和疲劳。
金盏花：具有抗炎、抗菌作用，常用于皮肤创伤、烧伤和炎症的缓解。
百里香：具有抗菌、抗病毒效果，常用于缓解咳嗽、支气管炎和呼吸道感染。
马齿苋：有抗炎、抗氧化作用，常用于清热解毒、促进伤口愈合。
甘草：具有润肺止咳、解毒作用，常用于治疗咳嗽、喉痛和消化不良。
生姜：有促进血液循环、消炎镇痛作用，常用于缓解恶心、胃痛和关节疼痛。
```

# 启动机器人
```bash
npm run start
```

# 打包机器人
安装 electron-builder
```
npm install electron-builder@latest -g
```

```bash
npm run pack

> doraemon-desktop-pet@2.0.0 pack
> electron-builder --win --x64

  • electron-builder  version=25.1.8 os=10.0.22621
  • loaded configuration  file=package.json ("build" field)
  • writing effective config  file=build\builder-effective-config.yaml
  • executing @electron/rebuild  electronVersion=27.1.3 arch=x64 buildFromSource=false appDir=./
  • installing native dependencies  arch=x64
  • completed installing native dependencies
  • packaging       platform=win32 arch=x64 electron=27.1.3 appOutDir=build\win-unpacked
  • updating asar integrity executable resource  executablePath=build\win-unpacked\药草宝宝迷你桌面宠物.exe
  ⨯ cannot execute  cause=exit status 1
                    errorOut=Fatal error: Unable to commit changes

                    command='C:\Users\Administrator\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0\rcedit-x64.exe' 'D:\wristwaking\build\win-unpacked\药草宝宝迷你桌面宠物.exe' --set-version-string FileDescription '边缘骇客药草宝宝迷你桌面宠物' --set-version-string ProductName '药草宝宝迷你桌面
宠物' --set-version-string LegalCopyright 'Copyright © 2025 上海预醒网络科技有限公司' --set-file-version 2.0.0 --set-product-version 2.0.0.0 --set-version-string InternalName '药草宝宝迷你桌面宠物' --set-version-string OriginalFilename '' --set-version-string CompanyName '上海预醒网络科技有限公司' --set-icon 'D:\wristwaking\build\.icon-ico\icon.ico'
                    workingDir=
  • Above command failed, retrying 3 more times
  ⨯ cannot execute  cause=exit status 1
                    errorOut=Fatal error: Unable to commit changes

                    command='C:\Users\Administrator\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0\rcedit-x64.exe' 'D:\wristwaking\build\win-unpacked\药草宝宝迷你桌面宠物.exe' --set-version-string FileDescription '边缘骇客药草宝宝迷你桌面宠物' --set-version-string ProductName '药草宝宝迷你桌面 宠物' --set-version-string LegalCopyright 'Copyright © 2025 上海预醒网络科技有限公司' --set-file-version 2.0.0 --set-product-version 2.0.0.0 --set-version-string InternalName '药草宝宝迷你桌面宠物' --set-version-string OriginalFilename '' --set-version-string CompanyName '上海预醒网络科技有限公司' --set-icon 'D:\wristwaking\build\.icon-ico\icon.ico'
                    workingDir=
  • Above command failed, retrying 3 more times
  • signing with signtool.exe  path=build\win-unpacked\药草宝宝迷你桌面宠物.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • building        target=nsis file=build\药草宝宝迷你桌面宠物 Setup 2.0.0.exe archs=x64 oneClick=false perMachine=false
  • signing with signtool.exe  path=build\win-unpacked\resources\elevate.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • signing with signtool.exe  path=build\__uninstaller-nsis-doraemon-desktop-pet.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • signing with signtool.exe  path=build\药草宝宝迷你桌面宠物 Setup 2.0.0.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • building block map  blockMapFile=build\药草宝宝迷你桌面宠物 Setup 2.0.0.exe.blockmap
```

# 常见打包问题

![image](https://github.com/user-attachments/assets/540b6a5f-2050-4771-95e2-90b0c452c77b)
