export const formatDate = (date) => {
    const unformatedDate = new Date(date);
    const formatedDate =
        unformatedDate.getDate() + "/" + (unformatedDate.getMonth() + 1) + "/" + unformatedDate.getFullYear();
    return formatedDate;
};
