const phoneRegexp = /(7|8)?(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
const phoneCompleteRegexp = /(7|8)\d{10}$/

/**
 * Get unmasked phone
 * @example "+7 (123) 456 - 78 - 90" -> "71234567890"
 *
 * @export
 * @param {string} value
 * @returns {string}
 */
export function getUnmaskedValue(value: string): string {
  return value.replace(/\D/g, '')
}

/**
 * Get masked phone value
 * @example "79999999999" -> "+7 (999) 999 - 99 - 99"
 *
 * @export
 * @param {(string | number)} [value='']
 * @returns {string}
 */
export function getMaskedValue(value: string | number = ''): string {
  const numberValue = value.toString().replace(/\D/g, '')

  if (!numberValue) {
    return ''
  }

  const matchValue = numberValue.match(phoneRegexp)

  if (!matchValue) {
    return ''
  }

  const maskedValue = `+7${matchValue[2] ? ` (${matchValue[2]}` : ''}${matchValue[3] ? `) ${matchValue[3]}` : ''}${matchValue[4] ? ` - ${matchValue[4]}` : ''}${
    matchValue[5] ? ` - ${matchValue[5]}` : ''
  }`

  return maskedValue
}

/**
 * Check complete phone string
 *
 * @export
 * @param {string} value
 * @returns {boolean}
 */
export function isComplete(value: string): boolean {
  const numberValue = value.replace(/\D/g, '')

  return phoneCompleteRegexp.test(numberValue)
}
