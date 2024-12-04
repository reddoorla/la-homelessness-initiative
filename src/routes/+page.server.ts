import type { Actions } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      
      // Simply return success - Netlify will handle the actual form submission
      return {
        success: true
      };
    } catch (error) {
      return {
        success: false
      };
    }
  }
} satisfies Actions;
