import {Contributor} from '../../models';

export function getName(contributor: Contributor, useFullName = false): string {
    return useFullName
        ? getUserIdentificator(contributor)
        : getShortContributorName(getUserIdentificator(contributor));
}

export function getUserIdentificator(contributor: Contributor): string {
    const {name, email, login} = contributor;

    if (typeof name === 'string' && name.length) {
        return name;
    }

    if (typeof login === 'string' && login.length) {
        return login;
    }

    if (typeof email === 'string' && email.length) {
        return email;
    }

    return '';
}

function getShortContributorName(fullContributorName: string): string {
    return fullContributorName.split(' ').reduce((result, current, index) => {
        return index > 0 ? `${result} ${current.charAt(0)}.` : current;
    }, '');
}
