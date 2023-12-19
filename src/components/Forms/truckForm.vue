<template>
    <v-container grid-list-xs>
        <v-dialog width="600px" v-model="dialog">
            <template #activator="{ props }">
                <v-btn v-bind="props" flat color="primary" prepend-icon="mdi-plus" size="small">Veículo</v-btn>
            </template>                            
            <v-card>
                <v-card-text>
                    <v-alert
                        v-if="errorMessage"
                        type="error"
                        :text="errorMessage"
                        :icon="false"
                        class="mb-3"
                        color="alert"
                    />
                    <form @submit="submit">
                        <v-row class="d-flex mb-3">
                            <v-col cols="12">
                                <v-label class="font-weight-bold mb-1">Placa</v-label>
                                <v-text-field
                                    v-model="plate"
                                    variant="outlined"
                                    color="primary"
                                    :hide-details="!errors.plate"
                                    :error-messages="errors.plate"
                                />
                            </v-col>
                        </v-row>
                        <v-btn
                            type="submit"
                            class="bg-primary text-amber-accent-1"
                            size="large"
                            block
                            flat
                            :loading="isSubmitting"
                            :disabled="isSubmitting"
                        >CADASTRAR</v-btn>
                    </form>
                </v-card-text>
            </v-card>>
        </v-dialog>
    </v-container>
</template>

<script setup>
import * as yup from 'yup';
import messages from "@/utils/messages";
import { useForm, useField } from 'vee-validate';
import { ref, defineEmits } from 'vue';
import { useTruck } from "@/store/truck";
const truckStore = useTruck();
const errorMessage = ref(null)


const schema = yup.object({
    plate: yup.string().required().label('Placa'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
})

const dialog = ref(false)
const emit = defineEmits(['truckAdded', 'push'])

const submit = handleSubmit((values) => {
    errorMessage.value = null
    return truckStore.addTruckStore(values.plate).then(() => {
        plate.value = '';
        dialog.value = false;
        emit('truckAdded');
        emit('push');
        location.reload();
        
    }).catch((e) => {
        console.log("buceta");
        errorMessage.value = messages[e.response.data.error]
    })
})


const { value: plate } = useField('plate');

</script>