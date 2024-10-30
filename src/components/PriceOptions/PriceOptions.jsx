import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "optionName": "Basic",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker access",
                "Free parking"
            ]
        },
        {
            "id": 2,
            "optionName": "Standard",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker access",
                "Free parking",
                "Group fitness classes",
                "One free personal training session per month"
            ]
        },
        {
            "id": 3,
            "optionName": "Premium",
            "price": 80,
            "features": [
                "Access to gym equipment",
                "Locker access",
                "Free parking",
                "Unlimited group fitness classes",
                "Weekly personal training session",
                "Sauna and spa access"
            ]
        },
        {
            "id": 4,
            "optionName": "VIP",
            "price": 120,
            "features": [
                "Access to gym equipment",
                "Locker access",
                "Free parking",
                "Unlimited group fitness classes",
                "Two personal training sessions per week",
                "Sauna and spa access",
                "Nutrition and meal planning"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-5xl">Best Price in Town!!</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-12">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;