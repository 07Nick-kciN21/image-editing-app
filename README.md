## 專案結構

├── client/ # 前端
│ ├── public/
│ │ └── index.html # 前端HTML模板
│ ├── src/
│ │ ├── components/ # 前端组件
│ │ │ ├── ImageUploader.js # 上傳圖片
│ │ │ ├── ImageEditor.js # 整合上傳和預覽功能，並提供亮度和對比度的控制
│ │ │ └── ImagePreview.js # 顯示調整亮度和對比度後的圖片
│ │ ├── App.js # 主應用程式
│ │ ├── index.js # 應用程式入口文件
│ │ └── styles.css # 樣式文件
│ └── package.json # client 配置文件
├── server/ # 後端
│ ├── controllers/
│ │ └── imageController.js # 後端服務
│ ├── routes/
│ │ └── imageRoutes.js # API設置
│ ├── uploads/ # 圖片儲存位置
│ ├── app.js # Express设置
│ ├── config.js # 配置檔
│ ├── server.js # 启动服务器
│ └── package.json # server 配置文件
└── README.md # 說明文件

## 前置需求
`Node.js 16` 
可用nvm（Node Version Manager）來管理和切換Node.js版本。
如果還沒有安裝nvm，請按照[這些說明](https://github.com/nvm-sh/nvm#installing-and-updating)進行安裝。
```
nvm install 16
nvm use 16
```
確認Node.js版本：
```
node -v
```

## 啟動指令

### client
```
cd client
npm install
npm start
```
### server
```
cd server
npm install
node server.js
```