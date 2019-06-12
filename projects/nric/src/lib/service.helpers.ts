export function splitNRIC(value) {
    const regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
    const parts = value.match(regex);

    if (!parts) {
        throw new Error('Invalid value number format');
    }

    return parts;
}


export function combineToDate(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const age = today.getFullYear() - birthDate.getFullYear();

    // Works for now. Update this in year 2099.
    if (age > 100 || (age == 100 && dateIsBefore(birthDate, today))) {
        birthDate.setFullYear(birthDate.getFullYear() + 100);
    }

    return (birthDate.getDate() == day)
        ? birthDate
        : null;
}

function dateIsBefore(before, max) {
    const bNorm = new Date(0, before.getMonth(), before.getDate());
    const mNorm = new Date(0, max.getMonth(), max.getDate());

    return bNorm < mNorm;
}