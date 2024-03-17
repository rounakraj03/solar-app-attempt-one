"use client"

import { useRef, useState } from "react";

const PriceCalculator = ({id}) => {

    const priceRef = useRef(null);
    const [priceValue, setPriceValue] = useState(50);


    const unitOfEnergyRef = useRef(null);
    const tenureRef = useRef(null);
    const interestRef = useRef(null);
    const [unitOfEnergy, setUnitOfEnergy] = useState(100); // Initial value for unit of energy
    const [tenure, setTenure] = useState(2.5); // Initial value for tenure
    const [interest, setInterest] = useState(7.50); // Initial value for tenure
    const [savings, setSavings] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [monthlyEMI, setMonthlyEMI] = useState(0);



    const calculateSavings = () => {
        // const savings = unitOfEnergy * tenure * 0.1;
        // Replace the formula with the actual savings calculation based on the Indian market
        // For example, assuming a 10% savings on energy costs:
        const energyCost = unitOfEnergy * 70; // Market value of solar per unit * unitOfEnergy
        const savings = energyCost * 0.1 * tenure;
        setSavings(savings);
    };

    const calculateTotalPrice = () => {
        // const totalPrice = 5000 + (unitOfEnergy * 100);
        // Replace the formula with the actual total price calculation based on the Indian market
        // For example, assuming a fixed installation cost of ₹50,000 and the market value of solar per unit:
        const installationCost = 50000;
        const energyCost = unitOfEnergy * 70;
        const totalPrice = installationCost + energyCost;
        setTotalPrice(totalPrice);
    };

    const calculateEMI = () => {
        // const monthlyEMI = totalPrice / (tenure * 12);
        // Replace the formula with the actual EMI calculation based on the Indian market
        // For example, assuming a flat interest rate over the tenure:
        const principal = totalPrice;
        const annualInterestRate = interest / 100; // Convert interest rate to decimal
        const months = tenure * 12;
        const monthlyInterestRate = annualInterestRate / 12;
        const monthlyEMI = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
        setMonthlyEMI(monthlyEMI);
    };


    const handleChange = () => {
        calculateSavings();
        calculateTotalPrice();
        calculateEMI();
    };

    const formatInterest = (value, index) => {
        return parseFloat(value).toFixed(index);
    };


    const updateEnergy = (e) => {
        setUnitOfEnergy(e.target.value);
        handleChange();
    };

    const updateInterest = (e) => {
        setInterest(formatInterest(e.target.value, 2));
        handleChange();
    };

    const updateTenure = (e) => {
        setTenure(formatInterest(e.target.value, 1));
        handleChange();
    };


    return (
        <div className='w-screen h-screen px-20 flex flex-col items-center gap-10' id={id} >
            <h1 className='text-6xl font-semibold '>Calculate Your Cost</h1>
            <div className='h-[calc(100vh-70px)]  flex flex-col justify-start items-center gap-20 py-5'>
                <div className="flex items-center justify-evenly gap-10" ref={unitOfEnergyRef}>
                    <h2 className="text-xl font-semibold">Units: </h2>
                    <input
                        onChange={(e) => updateEnergy(e)}
                        type="range"
                        value={unitOfEnergy}
                        min={100}
                        max={1000}
                        step={50}
                        className="range-slider"
                    ></input>
                    <h2 className="font-semibold text-2xl underline"
                        style={{ textDecorationSkipInk: 'none', textDecorationThickness: '2px', textDecorationLine: 'underline' }}>
                        {unitOfEnergy} unit
                    </h2>
                </div>

                <div className="flex items-center justify-evenly gap-10" ref={interestRef}>
                    <h2 className="text-xl font-semibold">Interest Rate: </h2>
                    <input
                        onChange={(e) => updateInterest(e)}
                        type="range"
                        value={interest}
                        min={1}
                        max={20}
                        step={0.25}
                        className="range-slider"
                    ></input>
                    <h2 className="font-semibold text-2xl underline"
                        style={{ textDecorationSkipInk: 'none', textDecorationThickness: '2px', textDecorationLine: 'underline' }}>
                        {interest} %
                    </h2>
                </div>

                <div className="flex items-center justify-evenly gap-10" ref={tenureRef}>
                    <h2 className="text-xl font-semibold">Year: </h2>
                    <input
                        onChange={(e) => updateTenure(e)}
                        type="range"
                        value={tenure}
                        min={1}
                        max={10}
                        step={0.5}
                        className="range-slider"
                    ></input>
                    <h2 className="font-semibold text-2xl underline"
                        style={{ textDecorationSkipInk: 'none', textDecorationThickness: '2px', textDecorationLine: 'underline' }}>
                        {tenure} years
                    </h2>
                </div>

                <div className="flex flex-col gap-3 justify-start items-start font-semibold text-xl">
                    <h1>Monthly Emi: {formatInterest(monthlyEMI, 2)}</h1>
                    <h1>Savings: {savings}</h1>
                    <h1>Total Price: {totalPrice}</h1>
                </div>
            <div className='h-[1px] w-screen  bg-white'></div>


            </div>
            
        </div>
    )
}

export default PriceCalculator