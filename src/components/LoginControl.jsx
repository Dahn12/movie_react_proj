import React from 'react'

export default function LoginControl() {
  return (
    <div className='login-control-toggle'>
        <Toggle />
    </div>
  )
}

class Toggle extends React.Component{
    constructor(props){ /*생성자 만들어줌 */
        super(props)/*생성자 초기화*/ 
        this.state = {
            isLoggedIn: true, /*초기값: flase*/
        }

        // 함수를 바인딩 해줌
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        })
            console.log(this.state.isLoggedIn);
    }


    render() {
        return(
            <div>
                <button className='login-control-btn' onClick={this.handleChange}>{this.state.isLoggedIn? "로그인":"로그아웃"}</button>
            </div>
        );
    }
}

