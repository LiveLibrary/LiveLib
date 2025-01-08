<template>
    <NuxtLayout name="default">
        <div class="w-full h-dvh flex items-center justify-center">
            <div class="flex flex-col justify-center items-center gap-y-4">
                <div>
                    <AppSwitchMode />
                    <AppSwitchPrimaryColor />
                </div>
                <div class="flex flex-wrap gap-4">
                    <UButton variant="solid">
                        Flexoki
                    </UButton>
                    <UButton variant="subtle">
                        Flexoki
                    </UButton>
                    <UButton variant="outline">
                        Flexoki
                    </UButton>
                    <UButton variant="ghost">
                        Flexoki
                    </UButton>
                    <UButton variant="soft">
                        Flexoki
                    </UButton>
                    <UButton variant="link">
                        Flexoki
                    </UButton>
                </div>
                <div class="flex flex-wrap gap-4">
                    <UBadge color="primary" variant="solid">Badge</UBadge>
                    <UBadge color="primary" variant="subtle">Badge</UBadge>
                    <UBadge color="primary" variant="soft">Badge</UBadge>
                    <UBadge color="primary" variant="outline">Badge</UBadge>
                </div>
                <div class="flex flex-wrap gap-4">
                    <UCheckbox color="primary" default-value />

                    <USwitch color="primary" default-value />
                </div>
                <div class="flex flex-wrap gap-4">
                    <UButton variant="solid" color="neutral">
                        Flexoki
                    </UButton>
                    <UButton variant="subtle" color="neutral">
                        Flexoki
                    </UButton>
                    <UButton variant="outline" color="neutral">
                        Flexoki
                    </UButton>
                    <UButton variant="ghost" color="neutral">
                        Flexoki
                    </UButton>
                    <UButton variant="soft" color="neutral">
                        Flexoki
                    </UButton>
                    <UButton variant="link" color="neutral">
                        Flexoki
                    </UButton>
                </div>
                <div class="flex flex-wrap gap-4">
                    <UBadge color="neutral" variant="solid">Badge</UBadge>
                    <UBadge color="neutral" variant="subtle">Badge</UBadge>
                    <UBadge color="neutral" variant="soft">Badge</UBadge>
                    <UBadge color="neutral" variant="outline">Badge</UBadge>
                </div>
                <div class="flex flex-wrap gap-4">
                    <UCheckbox color="neutral" default-value />
                    <USwitch color="neutral" default-value />
                </div>
                <div class="w-full relative">
                    <FlexokiPalette />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
/* Delete this and start building your app. Happy coding! */
import { useIndexStore } from '~/stores';

const { name } = storeToRefs(useIndexStore());
const toast = useToast();

function openToast() {
    toast.add({
        title: 'Hey!',
        description: 'Hello! You just clicked the button!',
        color: 'success'
    })
    navigateTo('/about')
}
/* // */

useSeoMeta({
    title: "v4.20 | Your Project Title",
    ogTitle: "v4.20 | Your Project Title",
    description: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    ogUrl: 'https://www.yourproject.com/',
    twitterImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "v4.20 | Your Project Title",
    twitterDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImageWidth: 1200,
    ogImageHeight: 630,
});

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg'
        }
    ]
})
</script>