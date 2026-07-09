export const GETINDEX = (DATABASE, STORE, CALLBACK) => {
    let completed = false;

    const finish = (data) => {
        if (completed) return;
        completed = true;
        CALLBACK(data);
    };

    try {
        const request = indexedDB.open(DATABASE);

        request.onerror = () => {
            finish([]);
        };

        request.onsuccess = () => {
            const db = request.result;

            if (!db.objectStoreNames.contains(STORE)) {
                db.close();
                finish([]);
                return;
            }

            const transaction = db.transaction(STORE, "readonly");
            const objectStore = transaction.objectStore(STORE);
            const getRequest = objectStore.getAll();

            getRequest.onsuccess = () => {
                const data = getRequest.result || [];
                db.close();
                finish(data);
            };

            getRequest.onerror = () => {
                db.close();
                finish([]);
            };
        };
    } catch (err) {
        finish([]);
    }
};