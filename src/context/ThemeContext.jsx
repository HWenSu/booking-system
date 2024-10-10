import React, {createContext, useContext, useState} from 'react'

// 創建主題 Context
const ThemeContext = createContext()

//創建主題 Provider 並設定 value 為當前主題和更新的主題 
export const ThemeProvider = ({children})=> {
  const [currentTheme, setCurrentTheme] = useState("mudstone");

  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
// 自訂義 Hook, 用於封裝 useContext(ThemeContext), 返回 {currentTheme, setCurrentTheme}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if(!context) {
    throw new Error ('Error')
  }
  return context
}