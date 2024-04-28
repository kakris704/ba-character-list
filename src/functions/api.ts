type AllList = {
    id: number,
    name: string,
    profile: string
}

class blueAPI {
    
    // 全キャラクターの情報を返す
    async getAll() {
        const res = await fetch('https://api.ennead.cc/buruaka/character?region=japan');
        const json = await res.json();
        return json;
    }

    // 全キャラクターの詳細な情報を返す
    async getAllDetail() {
        const all = await this.getAll();
        // 各キャラのAPIを叩いて配列に返す
        const allDetailPromises = all.map((element: AllList, index: number) => {
            const res = this.getDetail(element.id);
            return res;
        });
        const allDetail = await Promise.all(allDetailPromises); // 完了を待つ
        return allDetail;
    }

    // 渡されたIDのキャラの詳細な情報を返す
    async getDetail(id: number) {
        const res = await fetch(`https://api.ennead.cc/buruaka/character/${id}?region=japan&id=true`);
        const json = await res.json();
        return json;
    }

    // テスト
    async getTest() {
        const res = await fetch('https://api-blue-archive.vercel.app/api/characters');
        const json = await res.json();
        return json;
    }
}

export default blueAPI;