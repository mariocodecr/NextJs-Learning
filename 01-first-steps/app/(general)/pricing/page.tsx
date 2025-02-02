import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Princing Page',
 description: 'This is service pricing page',
};

export default function PricingPage() {
    return (
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    );
    }