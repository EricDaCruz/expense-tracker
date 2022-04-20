import { useState, useEffect } from 'react'
import * as C from'./App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import TableArea from './components/TableArea'
import InfoArea from './components/InfoArea'
import InsertInfo from './components/InsertInfo'

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => { 
    setFilteredList(filterListByMonth(list, currentMonth))    
  },[currentMonth, list])
  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0
    if(filteredList.length > 0){
      for(let i in filteredList) {
        categories[filteredList[i].category].expense 
        ? expenseCount += filteredList[i].value 
        : incomeCount += filteredList[i].value
      
        setIncome(incomeCount)
        setExpense(expenseCount)
      }
    }else{
      setIncome(0)
      setExpense(0)
    }
    
  }, [filteredList])

  const handleChangeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }
  const handleAddItem = (newItem: Item): void => {
    let newList = [...list]
    newList.push(newItem)
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
       <C.HeaderText>Sistema Financeiro </C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleChangeMonth} 
          income={income}
          expense={expense}
        />


        <InsertInfo onAdd={handleAddItem}/>

        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  )
}

export default App
