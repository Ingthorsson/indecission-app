
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handeToggleVisibility = this.handeToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handeToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    };
    render() {
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handeToggleVisibility}>
                    {this.state.visibility ? 'hide Details' : 'show details'}
                </button>
                {this.state.visibility && (
                    <p>Hey look over here</p>
                )}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// const toggleVisible = () => {
//     visibility = !visibility;
//     render()
// }


// const render = () => {
//     const content = (
//         <div>
//             <h1>Toggle Visibility</h1>
//             <button onClick={toggleVisible}>
//             {visibility ? 'hide Details' : 'show details'}</button>
//             {visibility && (
//                 <p>Hey lok over here</p>
//             )}
//         </div>
//     );

//     ReactDOM.render(content, document.getElementById('app'));
// }

// render();