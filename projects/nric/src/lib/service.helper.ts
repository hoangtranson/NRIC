export function splitNRIC(value) {
    const regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
    const parts = value.match(regex);

    if (!parts) {
        throw new Error('Invalid value number format');
    }

    return parts;
}
