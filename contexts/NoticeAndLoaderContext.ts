import React from 'react'

const NoticeAndLoaderContext = React.createContext({
    clearNotice: () => {},
    showNotice: (notice: string) => {},
    modalLoaderOn: () => {},
    modalLoaderOff: () => {},
    waitingForResponse: false,
    notice: null
});

export default NoticeAndLoaderContext