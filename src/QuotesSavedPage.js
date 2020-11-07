import styled from 'styled-components/macro'

export default function QuotesSavedPage({quotesOverview}) {

    return(
        <QuoteWrapper>
            {quotesOverview.map( ({id, text, date}) => <li key={id}>{text} ({date})</li>)}
        </QuoteWrapper>

    )
}

const QuoteWrapper = styled.ul`
    height: 100%;
    width: 80%;
    margin: 0;
    padding: 0;
    text-align: center;
    //overflow-y: scroll;
  
  li {
   list-style: none;
   margin-bottom: 20px;
   padding: 15px;
   border-radius: 5px;
   box-shadow: 5px 5px 10px #d3d3d3;
   background-color: papayawhip;
  }
    
`
