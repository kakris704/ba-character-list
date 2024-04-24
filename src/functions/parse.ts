class typeParse {

    getBulletType(type: string) {
		let result: string;
		if(type === 'Explosive') {
			result = '爆発';
		} else if(type === 'Piercing') {
			result = '貫通';
		} else if(type === 'Mystic') {
			result = '神秘';
		} else if(type === 'Sonic') {
			result = '振動'
		} else {
            result = 'ノーマル'
        }
        return result;
	}

    getBulletTypeStyle(type: string): 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' {
        let result: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
        if(type === 'Explosive') {
			result = 'error';
		} else if(type === 'Piercing') {
			result = 'info';
		} else if(type === 'Mystic') {
			result = 'success';
		} else if(type === 'Sonic') {
			result = 'warning';
		} else {
            result = 'primary';
        }
        return result;
    }

    getArmorType(type: string) {
        let result: string;
		if(type === 'Light') {
			result = '軽装備';
		} else if(type === 'Heavy') {
			result = '重装備';
		} else if(type === 'Special') {
			result = '特殊装甲';
		} else if(type === 'Elastic') {
			result = '弾力装甲'
		} else {
            result = 'ノーマル'
        }
        return result;
    }

    getArmorTypeStyle(type: string): 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' {
        let result: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
        if(type === 'Light') {
			result = 'error';
		} else if(type === 'Heavy') {
			result = 'info';
		} else if(type === 'Special') {
			result = 'success';
		} else if(type === 'Elastic') {
			result = 'warning';
		} else {
            result = 'primary';
        }
        return result;
    }
}

export default typeParse;