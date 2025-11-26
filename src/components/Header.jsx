import imgLogo from "../assets/investment-calculator-logo.png"

export default function Header() {

    return (
        <header id="header">
            <img src={imgLogo} alt="react investment calcultor" />
            <h1>Investment Calculator</h1>
        </header>
    );

}