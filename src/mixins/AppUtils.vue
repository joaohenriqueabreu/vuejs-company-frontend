<script>
export default {
    methods: {
        $isMobile: () => {                        
            return /Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        $isNumeric: value => value !== undefined && value !== '' && ! isNaN(value) && isFinite(value)
    }    
}
</script>