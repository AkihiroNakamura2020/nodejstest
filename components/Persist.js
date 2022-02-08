
import React, { useState } from 'react'

function usePersist(ky, initVal) {
  const key = "hooks:" + ky 
  const value = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initVal
    } catch (err) {
      console.log(err)
      return initVal;
    }
  }
  const setValue = (val) => {
    try {
      setSavedValue(val)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (err) {
      console.log(err)
    }
  }
      //savedvalueというステートは保管する値の保持
    //usestateの引数にvalueとすることでvalueを使って値が取り出される。

    //各valueをsavedValue変数に入れて保存
  const [savedValue, setSavedValue] = useState(value)
//ここでsetvalueを返す意味
//オブジェクトの値を保管するものwindow.localStorage.setItem(key, JSON.stringify(val))
  return [savedValue, setValue]
}

export default usePersist
