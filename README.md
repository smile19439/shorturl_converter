![image](https://raw.githubusercontent.com/smile19439/shorturl_converter/main/image/home.PNG)
## 功能
1.使用者可以透過此網站產生短網址

2.使用者可以透過產生的短網址連結至原始網址

## 環境建置與需求
Node.js v14.16.0  
Mongodb v5.0.6
## 安裝與執行步驟
1.請先確認已安裝node.js及Mongodb  
  
2.使用終端機將此專案下載至本機
```
git clone https://github.com/smile19439/shorturl_converter.git
```  
3.cd至存放專案的資料夾後，使用npm安裝套件
```
npm install
```
4.於Mongodb建立好一個名稱為shorturl_converter的database  
  
5.若您有安裝nodemon，可使用以下指令執行
```
npm run dev
```
&ensp;若您沒有安裝nodemon，則可使用以下指令
```
npm run start
```
6.終端機顯示以下訊息即代表成功啟動  
>app is running on http://localhost:3000
  
7.點擊以下路徑即可開始使用
>http://localhost:3000
