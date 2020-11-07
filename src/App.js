import Quote from './Quote'
import Button from './Button'
import QuotesSavedPage from './QuotesSavedPage'
import Navigation from './Navigation'
import useQuote from './Hooks/useQuote'
import saveLocally from './lib/saveLocally'
import styled from 'styled-components/macro'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router'




function App() {
  
  const {quote, updateQuote, saveQuote, savedQuotes} = useQuote()
  
  useEffect(
    () => saveLocally('quotes', savedQuotes), [savedQuotes]
  )

  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/">
            <Quote text={quote.text} date={quote.date}/>
            <ButtonWrapper>
              <Button onClick={updateQuote}>Get new quote</Button>
              <Button onClick={saveQuote}>Save new quote</Button>
            </ButtonWrapper>
            <QuoteWrapperSavedQuotes>
              {savedQuotes.map(({id, text, date}) => <li key={id}>{text} ({date})</li>)}
            </QuoteWrapperSavedQuotes>
        </Route>
        <Route path="/savedQuotes">
          <QuotesSavedPage quotesOverview={savedQuotes}/>
        </Route>
      </Switch>
      <Navigation/>
    </AppWrapper>
  )

}

export default App;

const AppWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 30% 60px 1fr;
  gap: 20px;
  place-items: center;
`

const QuoteWrapperSavedQuotes = styled.ul`
  height: 100%;
  width: 80%;
  margin: 0;
  padding: 0;
  //overflow-y: scroll;
  
  li {
   list-style: none;
   margin-bottom: 20px;
   padding: 15px;
   border-radius: 5px;
   box-shadow: 5px 5px 10px #d3d3d3;
   background-color: #EDEDED;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
