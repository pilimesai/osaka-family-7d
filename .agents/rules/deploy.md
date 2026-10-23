# 上傳與發布規則（osaka-family-7d）

使用者說「傳 GitHub」、「上傳」、「更新網站」或類似指令時，**一定要做完以下兩步**，不能只做第一步：

## 步驟 1：推送程式碼到 main
```powershell
git add <有修改的檔案>
git commit -m "<簡短描述修改內容>"
git push origin main
```

## 步驟 2：發布網站到 GitHub Pages
```powershell
npm run deploy
```
- 會自動先 `vite build`，再用 `gh-pages -d dist` 發布到 `gh-pages` 分支。
- 網站網址：https://pilimesai.github.io/osaka-family-7d/
- 網站是從 `gh-pages` 分支讀取，**只 push 到 main 網站不會更新**。
- 建置約 40 秒，完成後輸出 `Published` 即成功。

## 注意事項
- GitHub 上傳權限（token）已設定好，可直接 push，不需要詢問使用者登入。
- git 作者名稱目前顯示為 `Int <User@INT.apitech.com.tw>`，不影響上傳，不需每次提醒。
- 完成後告訴使用者：GitHub Pages 約 1～2 分鐘生效，若看到舊版請按 Ctrl + F5。
