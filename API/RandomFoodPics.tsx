export const GetRandomFoodImages = async (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
        const res = await fetch("https://foodish-api.com/api/", {});
        const data = await res.json();
        images.push(data.image);
    }
    return images;
};