import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/addImage.vue'

describe('addimage.vue', () => {
  it('renders heading', () => {
    const welcomeText = 'Add An Image'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
