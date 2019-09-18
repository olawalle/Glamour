// export const baseUrl = 'https://g-o-d.herokuapp.com'
export const baseUrl = 'https://api.staging.groomingondemand.com'
// export const baseUrl = 'https://api.staging.glamourondemand.com'
export const login = `${baseUrl}/users/login`
export const activate = `${baseUrl}/users/activate`
export const clientRegister = `${baseUrl}/users/client/register`
export const providerRegister = `${baseUrl}/users/provider/register`
export const getCurrentUser = `${baseUrl}/users/me`
export const disableUser = `${baseUrl}/users/status/update`
export const changePassword = `${baseUrl}/users/change-password`
export const getAllUsers = `${baseUrl}/users/all`
export const clientStatusUrl = `${baseUrl}/users/client-status`
export const providerStatusUrl = `${baseUrl}/users/provider-status`
export const getUserNotifications = `${baseUrl}/notifications`
export const getBills = `${baseUrl}/bill`
export const cityUrl = `${baseUrl}/city`
export const getAllBookings = `${baseUrl}/bookings/admin`

export const allProvidersUrl =  `${baseUrl}/users/provider`
export const providerServicesUrl = `${baseUrl}/services`
export const providerPublicServicesUrl = `${baseUrl}/services/provider`
export const providerSchedule = `${baseUrl}/bookings/schedule`
export const addServicesUrl = `${baseUrl}/uploads/services`
export const addServiceCategory = `${baseUrl}/uploads/categories`
export const servicesUrl = `${baseUrl}/categories`
export const payUrl = `${baseUrl}/bookings/pay`
export const subscriptionPayUrl = `${baseUrl}/users/pay`
export const trendsUrl = `${baseUrl}/users/trends`
export const categoriesUrl = `${baseUrl}/categories`
export const clientBookingsUrl = `${baseUrl}/bookings`
export const providerBookingUrl = `${baseUrl}/bookings/provider`
export const reviewsUrl = `${baseUrl}/services/review`
export const providersDetailsUrl = `${baseUrl}/users/provider/detail`
export const addressUrl = `${baseUrl}/users/address`
export const uploadUrl = `${baseUrl}/uploads`
export const imageUrl = `${baseUrl}/uploads/addImage`
export const bannerUploadUrl = `${baseUrl}/uploads/addBanner`
export const lookbookUrl = `${baseUrl}/users/lookbook`
export const addLookbookUrl = `${baseUrl}/uploads/addlook`
export const saveProviders = `${baseUrl}/users/save/provider`
export const subscriptionsUrl = `${baseUrl}/subscription`
export const providerSubscription = `${baseUrl}/users/subscribe`
export const confirmSubscription = `${baseUrl}/users/confirm-pay`
export const updateClient = `${baseUrl}/users/client/update`
export const updateProvider = `${baseUrl}/users/provider/update`
export const messageUrl = `${baseUrl}/messages`
export const providerMessageUrl = `${baseUrl}/conversations/provider`
export const clientMessageUrl = `${baseUrl}/conversations/client`
export const createConversationUrl = `${baseUrl}/messages/conversation`