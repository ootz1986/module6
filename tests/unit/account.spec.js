import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/account.vue'

describe('account.vue', () => {
  it('renders heading', () => {
    const welcomeText = 'User Login/Registration'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
