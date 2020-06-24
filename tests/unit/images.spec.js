import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/images.vue'

describe('images.vue', () => {
  it('renders heading', () => {
    const welcomeText = 'Latest Images'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
