export const updateSettingCurrency = (data) => {
  return {
    type: 'UPDATE_SETTING_CURRENCY',
    rates: data
  }
}
