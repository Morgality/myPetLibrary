const photoList = [
    'https://ir.ozone.ru/s3/multimedia-0/wc1000/6824776392.jpg',
    'https://ir.ozone.ru/s3/multimedia-1-d/wc1000/6920783761.jpg',
    'https://ir.ozone.ru/s3/multimedia-n/wc1000/6510252611.jpg',
    'https://ir.ozone.ru/s3/multimedia-1-c/wc1000/6986738100.jpg',
    'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/6926506456.jpg',
    'https://ir.ozone.ru/s3/multimedia-3/wc1000/6546408975.jpg',
    'https://ir.ozone.ru/s3/multimedia-1-r/wc1000/6958680435.jpg',
    'https://ir.ozone.ru/s3/multimedia-a/wc1000/6673435102.jpg',
    'https://ir.ozone.ru/s3/multimedia-1-b/wc1000/6918763007.jpg',
    'https://ir.ozone.ru/s3/multimedia-1/wc1000/6841273753.jpg',
    'https://ir.ozone.ru/s3/multimedia-g/wc1000/6603801640.jpg',
    'https://ir.ozone.ru/s3/multimedia-1-g/wc1000/6953989660.jpg',
]

export const getRandomPhoto = () => {
    return photoList[Math.floor(Math.random() * (11 - 0 + 0)) + 0]
}