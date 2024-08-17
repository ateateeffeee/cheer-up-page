import adverbsData from "./adverbs.json";

const AdverbGenerator = () => {
    const getRandomAdverb = () => {
        const adverbs = adverbsData.adverbs;
        const randomIndex = Math.floor(Math.random() * adverbs.length);
        return adverbs[randomIndex];
    }

    const adverb = getRandomAdverb();

    return adverb;
}

export default AdverbGenerator;
