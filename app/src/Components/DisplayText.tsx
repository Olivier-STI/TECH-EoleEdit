const DisplayText = (props : any) => {
    return (
        <div style={{marginTop : "1%"}}>
            <text style = {{fontSize : props.TextSize}}>
                {props.Text}
            </text>
        </div>
    )
}

export default DisplayText