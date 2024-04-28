class typeParse {

	// 攻撃タイプの文字列を返す
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

	// 攻撃タイプの色（テーマ）を返す
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

	// 防御タイプの文字列を返す
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

	// 防御タイプの色（テーマ）を返す
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

	// ロールの文字列を返す
	getRole(role: string) {
		let result:string;
		if(role === 'Dealer') {
			result = 'アタッカー';
		} else if(role === 'Tank') {
			result = 'タンク';
		} else if(role === 'Support') {
			result = 'サポート';
		} else if(role === 'T.S.') {
			result = 'T.S';
		} else if(role === 'Healer') {
			result = 'ヒーラー';
		} else {
            result = 'バグってる';
        }
        return result;
	}

	getSchool(school: string) {
		switch(school) {
			case 'Gehenna':
				return 'ゲヘナ学園';
			case 'Millennium':
				return 'ミレニアム';
			case 'Trinity':
				return 'トリニティ総合学園';
			case 'Abydos':
				return 'アビドス高等学校';
			case 'Shanhaijing':
				return '山海経高級中学校';
			case 'Hyakkiyako':
				return '百鬼夜行連合学院';
			case 'RedWinter':
				return 'レッドウィンター連邦学園';
			case 'SRT':
				return 'SRT特殊学園';
			case 'Valkyrie':
				return 'ヴァルキューレ警察学校';
			case 'Arius':
				return 'アリウス分校';
			default:
				return '-'
		}
		
	}
}

export default typeParse;