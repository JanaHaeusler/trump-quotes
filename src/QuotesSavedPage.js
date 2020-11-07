import styled from 'styled-components/macro'
import useQuote from './Hooks/useQuote'

export default function QuotesSavedPage({quotesOverview}) {

    const {deleteQuote} = useQuote()

    return(
        <QuoteWrapper>
            {quotesOverview.map( ({id, text, date}) => <li key={id}>{text} ({date})<span onClick={() => deleteQuote({id})}>&times;</span></li>)}
        </QuoteWrapper>

    )
}

const QuoteWrapper = styled.ul`
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
    background-color: papayawhip;
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