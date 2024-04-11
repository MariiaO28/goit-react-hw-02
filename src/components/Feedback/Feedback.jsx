export default function Feedback({ value, totalFeedback, positive }) {
    
    return (
        <div>
            <p>Good: {value.good}</p>
            <p>Neutral: {value.neutral} </p>
            <p>Bad: {value.bad} </p>
            {totalFeedback > 0 && (
                <p>Total: {totalFeedback}</p>
            )}
            {value.good > 0 && (
                <p>Positive: {positive}%</p>
            )}
        </div>
    )
}