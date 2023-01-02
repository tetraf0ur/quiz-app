export const headerTitleHandler = (location: string) => {
    switch (location) {
        case '/':
            return 'Главная'
        case '/referral':
            return 'Партнерская программа'
        case '/profile':
            return 'Ваш профиль'
        case '/archive':
            return 'Архив'
        case '/withdraw':
            return 'Кошелек'
        case '/create':
            return 'Создать новую задачу'
        case "/notifications":
            return "Уведомления"
        default:
            break
    }
}
