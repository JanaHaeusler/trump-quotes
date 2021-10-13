import styled from 'styled-components/macro'

export default function Quote({ text, date }) {
  return (
    <QuoteWrapper>
      <time dateTime={date}>{date}</time>
      <blockquote>"{text}"</blockquote>
    </QuoteWrapper>
  )
}

const QuoteWrapper = styled.div`
  width: 80%;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #d3d3d3;
  padding: 10px;
  text-align: center;

  time {
    font-weight: bold;
    font-size: 1rem;
    color: #666;
  }

  blockquote {
    font-size: 1.5rem;
    font-style: italic;
    color: #333;
  }
`
