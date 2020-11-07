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
  
  const {quote, updateQuote, saveQuote, savedQuotes, deleteQuote} = useQuote()
  
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
              {savedQuotes.map(({id, text, date}) => <li key={id}>{text} ({date}) <span onClick={() => deleteQuote({id})}>&times;</span></li>)}
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
    position: relative;
    margin-bottom: 20px;
    padding: 15px;
    list-style: none;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #d3d3d3;
    background-color: #EDEDED;
  }
  span {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #A8A8A8;
    background-color: teal;
    color: white;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
