export const GETINDEX = (DATABASE,STORE,CALLBACK) => {
    try {
        const Request =indexedDB.open(DATABASE);
        Request.onsuccess = () => {
            const DB =Request.result;
            if (
                !DB.objectStoreNames.contains(STORE)
            ) {
                CALLBACK(JSON.stringify([]));
                DB.close();
                return;
            }
            const Transaction =DB.transaction(STORE, "readonly");
            const ObjectStore =Transaction.objectStore(STORE);
            const GetRequest =ObjectStore.getAll();
            GetRequest.onsuccess = () => {
                CALLBACK(JSON.stringify(GetRequest.result));
                DB.close();
            };
            GetRequest.onerror = () => {
                CALLBACK(JSON.stringify([]));
                DB.close();
            };
        };
        Request.onerror = () => {
            CALLBACK(JSON.stringify([]));
        };
    } catch {
        CALLBACK(JSON.stringify([]));
    };
};