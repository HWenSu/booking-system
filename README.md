# 預約網站
![專案封面圖](https://fakeimg.pl/500x300/)
>一個專為服務型業務設計的線上預約平台，適用於按摩、理髮、醫療諮詢等場景。透過模板設計可以靈活調整預約頁面中項目的順序及排版（服務項目, 預約時段, 服務人員, 換頁按鈕..可自由更換順序）

**網站預覽** : https://booking-system-weld-two.vercel.app/
**後端repo** : https://github.com/HWenSu/booking-system-back (後端由[Archer](https://github.com/Archer3912)協作)

---

## 功能特色

### 基本功能
- **服務項目導覽**：一頁式瀏覽服務項目，每項有彈出框顯示詳細資訊。
- **服務人員介紹**：列表瀏覽服務人員。
- **響應式設計**: 支援不同裝置瀏覽介面。
- **條件篩選與預約**：在預約表單中可以根據條件（如性別）篩選服務人員。

### 進階功能
- **動態模板渲染**：依後端模板自動生成表單，無需手動調整。
- **即時確認**：預約資料提交後即發送電子郵件確認。
- **多主題支持**：適配不同品牌風格，主題可動態切換。

---
## 技術架構

### 前端技術

- **React**：構建高效使用者界面。
- **Vite**：提供快速的開發環境。
- **TailwindCSS**：實現響應式設計。

### 後端技術

- **Node.js (Express.js)**：處理 API 請求。
- **Sequelize + MySQL**：數據庫操作與管理。

### 其他工具

- **React Hook Form**：表單狀態管理與驗證。
**React Date Picker**：建立時間選擇器。

---

## 畫面

> 可提供 1~3 張圖片，讓觀看者透過 README 了解整體畫面

![範例圖片 1](https://fakeimg.pl/500/)
![範例圖片 2](https://fakeimg.pl/500/)
![範例圖片 3](https://fakeimg.pl/500/)

## 安裝步驟

### 系統需求

- **Node.js**：版本 >= 16.0.0
- **npm 或 yarn**：包管理器
- **MySQL**：資料庫支持

### 取得專案

1. Clone專案至本地

   ```bash
   git clone https://github.com/HWenSu/booking-system.git
   cd booking-system
   ```

### 安裝套件

   ```bash
   npm install
   ```


### 啟動開發伺服器

   ```bash
   npm run dev
   ```

   預設伺服器地址：`http://localhost:3000`

---

##  開發筆記

1. **API 整合簡化**：
   - 自訂 `useAPIHook` 處理數據請求，簡化整合。
2. **動態表單渲染**：
   - 使用 `componentMap` 動態映射模板類型。
3. **條件篩選**：
   - 前後端溝通篩選邏輯，確定主鍵位置。
4. **多步驟表單**：
   - 實現分頁式表單，增強流暢性。
5. **表單驗證與管理**：
   - 使用 React Hook Form 優化表單管理。

---

## 未來規劃


- **用戶身份驗證**：提供註冊與登錄功能。
- **支付集成**：支持預付訂單支付。
- **API 擴展**：增加外部集成支持。
- **行動應用程式**：基於 React Native 開發行動版本。

---

##  授權條款

此專案基於 MIT 許可證，詳細內容請參閱 [LICENSE](./LICENSE)。

---

## 聯絡方式

如有任何疑問或建議，請聯繫：

- **作者**：HWenSu
- **Email**：[trista44488@gmail.com](mailto:trista44488@gmail.com)
- **GitHub**：[HWenSu](https://github.com/HWenSu)
