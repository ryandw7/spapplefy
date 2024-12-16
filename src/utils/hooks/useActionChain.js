import { useEffect } from 'react';

const useActionChain = (actionsArr, dep) => {
    useEffect(() => {
        for (let i = 0; i < actionsArr.length; i++) {
            actionsArr[i]()
        }
    }, [dep])
}

export default useActionChain;