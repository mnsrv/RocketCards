const formatPrice = x => x.toString().replace(/(?=(\d{3})+(?!\d))/g, " ");

export default formatPrice;
