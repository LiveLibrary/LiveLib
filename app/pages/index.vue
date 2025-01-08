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
useSeoMeta({
    title: "Nuxoki | Your Project Title",
    ogTitle: "Nuxoki | Your Project Title",
    description: "Elevate your projects with this minimalistic Nuxt 3 template, designed to seamlessly integrate the Flexoxi color palette. Perfect for developers looking to create modern, clean, and visually appealing websites or applications with Nuxt’s powerful features.",
    ogDescription: "Elevate your projects with this minimalistic Nuxt 3 template, designed to seamlessly integrate the Flexoxi color palette. Perfect for developers looking to create modern, clean, and visually appealing websites or applications with Nuxt’s powerful features.",
    ogImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    ogUrl: 'https://nuxoki.vercel.app/',
    twitterImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Nuxoki | Your Project Title",
    twitterDescription: "Elevate your projects with this minimalistic Nuxt 3 template, designed to seamlessly integrate the Flexoxi color palette. Perfect for developers looking to create modern, clean, and visually appealing websites or applications with Nuxt’s powerful features.",
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