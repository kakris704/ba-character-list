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

	getClub(club: string) {
		switch(club) {
			case 'Kohshinjo68':
				return '便利屋68';
			case 'Countermeasure':
				return '廃校対策委員会';
			case 'Fuuki':
				return '風紀委員会';
			case 'PandemoniumSociety':
				return '万魔殿';
			case 'RemedialClass':
				return '補習授業部';
			case 'Shugyobu':
				return '修行部';
			case 'KnightsHospitaller':
				return '救護騎士団';
			case 'TeaParty':
				return 'ティーパーティー'
			case 'SPTF':
				return '特異現象捜査部';
			case 'GameDev':
				return 'ゲーム開発部';
			case 'FoodService':
				return '給食部';
			case 'TrinityVigilance':
				return 'トリニティ自警団';
			case 'Veritas':
				return 'ヴェリタス';
			case 'BookClub':
				return '図書委員会';
			case 'RedwinterSecretary':
				return '事務局';
			case 'NinpoKenkyubu':
				return '忍術研究部';
			case 'CleanNClearing':
				return 'C&C';
			case 'TheSeminar':
				return 'セミナー';
			case 'GourmetClub':
				return '美食研究会';
			case 'KnowledgeLiberationFront':
				return '知識解放戦線';
			case 'RabbitPlatoon':
				return 'RABBIT小隊';
			case 'Engineer':
				return 'エンジニア部';
			case 'MatsuriOffice':
				return 'お祭り運営委員会';
			case 'HotSpringsDepartment':
				return '温泉開発部';
			case 'AriusSqud':
				return 'アリウススクワッド';
			case 'SisterHood':
				return 'シスターフッド';
			case 'HoukagoDessert':
				return '放課後スイーツ部';
			case 'Class227':
				return '227号特別クラス';
			case 'Onmyobu':
				return '陰陽部';
			case 'Meihuayuan':
				return '梅花園';
			case 'PublicPeaceBureau':
				return '公安局';
			case 'Endanbou':
				return '錬丹術研究会';
			case 'BlackTortoisePromenade':
				return '玄武商会';
			case 'Justice':
				return '正義実現委員会';
			case 'LaborParty':
				return '工務部';
			case 'anzenkyoku':
				return '生活安全局';
			case 'Hyakkayouran':
				return '百花繚乱';
			case 'Emergentology':
				return '救急医学部';
			case 'TrainingClub':
				return 'トレーニング部';
			case 'Genryumon':
				return '玄龍門';
			default:
				return '無し';
		}
	}

	getSquadType(type:string ):'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' {
		switch (type) {
			case 'Striker':
				return 'error'
			case 'Special':
				return 'success'
			default:
				return 'secondary'
		}
	}
}

export default typeParse;