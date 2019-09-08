<script>
export default {
    methods: {
        isMobile: () => /Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }    
}
</script>